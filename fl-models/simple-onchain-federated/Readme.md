# On Chain Federated Learning 
Simple aggregation computation that is possible onchain, can upload their weights and bias on chain. Which can further use FLuFHE to secure it using FHE. Simple aggregation is possible using FHE onchian. For larger compute and logic heavy aggregation we can do off-chain FHE using concrete-python compiler.

### How to run and train and aggregate
RUN pip3 install -r requirements.txt

Training
python3 main.py  --train --input ./training-data --output .

Aggregation 
python3 main.py  --aggregate  --output .                   