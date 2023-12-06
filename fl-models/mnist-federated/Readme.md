# Compute Heavy Federated Learning 
For compute heavy federated aggreagtion function we can still use FHE using concrete-python compiler. It is possible to compute encrypted values and run functions on it using concrete-python compiler. Further this compute can be proved using RISC zero bonsai or by using deterministic off-chain computations with Optimistic Rollups.

### How to run and train and aggregate
RUN pip3 install -r requirements.txt

Training
python3 main.py  --train --input ./training-data --output .

Aggregation 
python3 main.py  --aggregate  --output .                   