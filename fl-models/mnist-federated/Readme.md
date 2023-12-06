# Compute Heavy Federated Learning

For compute heavy federated aggregation function we can still use FHE using concrete-python compiler. It is possible to compute encrypted values and run functions on it using concrete-python compiler. Further this compute can be proved using RISC zero bonsai or by using deterministic off-chain computations with Optimistic Rollups.
We are also using Flower client to enable federated learning.

### How to run and train and aggregate

Use this script

```#!/bin/bash

python federated_server.py &
sleep 10  # Sleep for 3s to give the server enough time to start

for i in $(seq 0 1); do
    echo "Starting client $i"
    python client_federation.py &
done


trap 'trap - SIGTERM && kill -- -$$' SIGINT SIGTERM
# wait for  bakcground processes to complete
wait
```
