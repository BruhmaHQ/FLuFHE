# FLuFHE - Federated Leaning using FHE
![Alt text](./demo/pic4.png "High Level Architecture")
FLuFHE - Federated Learning using FHE to use decentralized model training and protect it against inference and stealth attacks.

 > Model Init Screen
![Alt text](./demo/pic5.png "High Level Architecture")



----
FLuFHE leverages the power of Fully Homomorphic Encryption (FHE) to address security and privacy concerns in Federated Learning (FL). By performing aggregation on encrypted models, FLuFHE prevents the aggregator from accessing the actual model parameters, protecting against both inference attacks and stealth attacks.

![Alt text](./demo/pic1.jpeg "High Level Architecture")

## Federated Learning

Federated Learning is a decentralized machine learning approach that enables training models across multiple edge devices or servers without sharing raw data. It preserves privacy by keeping data local, allowing collaborative model improvement while maintaining data confidentiality.


## Issues with Federated Learning

- Model Poisoning: Malicious participants may inject biased or misleading data during the federated learning process to compromise the integrity of the collaborative model.


- Privacy Leakage: Attackers might exploit model updates to glean information about individual participants, compromising the privacy of sensitive data.



## Flufhe - improving Federated Learning using fully homomorphic encryption

Performing aggregation on encrypted models so aggregator does not get access to actual model and only

## Architecture 🤖

![Alt text](https://d1bqvdqmynqyrb.cloudfront.net/_next/image?url=https%3A%2F%2Fresearch-website-prod-cms-uploads.s3.us.cloud-object-storage.appdomain.cloud%2FScreenshot_2022_12_06_at_2_53_57_PM_a8e647bea9.png&w=1920&q=85)

> This is how FHE can be used for Federated Learning

![Alt text](https://d1bqvdqmynqyrb.cloudfront.net/_next/image?url=https%3A%2F%2Fresearch-website-prod-cms-uploads.s3.us.cloud-object-storage.appdomain.cloud%2Fthumbnail_image001_c2934e686d.jpg&w=1920&q=75
)

## Technologies 🎮
- FHE
- Federated Learning
- Concrete-pyhton by ZAMA
- FHEVM
- Solidity
- Python
- Numpy


#### Built by team Bruhma 👾
