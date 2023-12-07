# FLuFHE Smart Contract

FLuFHE (Federated Learning using Fully Homomorphic Encryption ) leverages Inco Network which is a FHEvm which enalbes computing FHE cryptography natively on Chain

## Features

- **Encrypted Weight Storage:** Participants can submit encrypted weights using the `addEncrypyedValue` function.
- **Aggregation:** The contract provides a method (`AggregateEncryptedWeights`) to securely aggregate the encrypted weights.
- **Allowlisting:** Addresses can be allowlisted to control participation using the `addToAllowlist` function.


## Usage

1. Deploy the FLuFHE contract to the Inco blockchain.
2. Participants add encrypted weights using the `addEncrypyedValue` function.
3. Allowlist specific addresses using `addToAllowlist` or in batches with `addBulkAddresses`.
4. Aggregate encrypted weights securely using `AggregateEncryptedWeights`.


