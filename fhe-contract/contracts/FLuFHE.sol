// SPDX-License-Identifier: BSD-3-Clause-Clear

pragma solidity >=0.8.13 <0.8.20;

import "fhevm/lib/TFHE.sol";

contract FLuFHE {
    struct Weight {
        euint32 x;
        euint32 y;
    }

    bool isAggregated;
    bool public isAllowListingEnabled;

    mapping(address => Weight[]) public encryptedWeight;
    uint32 public constant MAX_ENCRYPTED_WEIGHTS = type(uint32).max;
    Weight[] public encryptedWeights;
    Weight public aggregatedEncryptedWeight;

    event AddEncryptedValue(address adder, euint32 x, euint32 y);
    event AddressAddedToAllowlist(address indexed addedAddress);
    event BulkAddressesAddedToAllowlist(address[] indexed addedAddresses);

    mapping(address => bool) public allowlist;

    constructor(bool _isAllowListingEnabled) {
        isAggregated = false;
        isAllowListingEnabled = _isAllowListingEnabled;
    }

    modifier onlyAllowlisted() {
        require(
            !isAllowListingEnabled || allowlist[msg.sender],
            "Address not on allowlist"
        );
        _;
    }

    function addEncrypyedValue(
        bytes calldata _encryptedValueX,
        bytes calldata _encryptedValueY
    ) public onlyAllowlisted {
        require(!isAggregated, "Values can't be added after aggregation");
        require(
            encryptedWeights.length < MAX_ENCRYPTED_WEIGHTS,
            "Maximum number of encrypted weights reached"
        );
        euint32 x = TFHE.asEuint32(_encryptedValueX);
        euint32 y = TFHE.asEuint32(_encryptedValueY);

        address sender = msg.sender;

        encryptedWeight[sender].push(Weight(x, y));
        encryptedWeights.push(Weight(x, y));
        emit AddEncryptedValue(sender, x, y);
    }

    function addToAllowlist(address _address) public {
        require(isAllowListingEnabled, "Allowlisting is not enabled");
        allowlist[_address] = true;
        emit AddressAddedToAllowlist(_address);
    }

    function addBulkAddresses(address[] calldata _addresses) public {
        require(isAllowListingEnabled, "Allowlisting is not enabled");
        for (uint256 i = 0; i < _addresses.length; i++) {
            allowlist[_addresses[i]] = true;
        }
        emit BulkAddressesAddedToAllowlist(_addresses);
    }

    function AggregateEncryptedWeights() public onlyAllowlisted {
        require(
            encryptedWeights.length > 0,
            "No encrypted weights to aggregate"
        );
        euint32 sumX;
        euint32 sumY;
        euint32 avgY;
        for (uint256 i = 0; i < encryptedWeights.length; i++) {
            sumX = TFHE.add(sumX, encryptedWeights[i].x);
            sumY = TFHE.add(sumY, encryptedWeights[i].y);
        }

        avgY = TFHE.div(sumY, uint32(encryptedWeights.length));

        aggregatedEncryptedWeight.x = sumX;
        aggregatedEncryptedWeight.y = avgY;
    }
}
