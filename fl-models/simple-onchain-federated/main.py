import argparse
import glob
import os
import subprocess
import sys

import pandas as pd


def local_training(input_dir, output_dir):
    print("Loading Dataset")
    data = glob.glob(f"{input_dir}/*csv")[0]
    df = pd.read_csv(data, header=None)

    avg = df.iloc[: , -1].mean()
    len = df.shape[0]

    print("Average:", avg)
    print("Lenght:", len)

    print("Saving Model")
    with open(f'{output_dir}/model.txt', 'w') as f:
        f.write(str(avg) + '\n')
        f.write(str(len) + '\n')


def aggregation(input_dir, output_dir):
    # loop throug directories in input_dir
    # for each directory, read model.txt
    # compute average
    # write to output_dir/model.txt

    models = []

    for dir in os.listdir(input_dir):
        model_path = os.path.join(input_dir, dir, "outputs", "model.txt")
        if os.path.isfile(model_path):
            subprocess.run(["cat", model_path])
            models.append(model_path)

    print("Models:", models)
    # loop through files and compute overall average
    avg = 0
    len = 0
    for model in models:
        with open(model, 'r') as f:
            data = f.readlines()
            avg += float(data[0]) * int(data[1])
            len += int(data[1])

    print("Overall average:", avg / len)

    with open(f'{output_dir}/model.txt', 'w') as f:
        f.write(str(avg / len) + '\n')


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Description of your program')
    
    parser.add_argument('--train', action='store_true', help='Train the model')
    parser.add_argument('--aggregate', action='store_true', help='Aggregate the results')
    parser.add_argument('--input', type=str, help='Input directory name', required=True)
    parser.add_argument('--output', type=str, help='Output file name', required=True)

    args = parser.parse_args()

    if args.train:
        # Train the model
        local_training(args.input, args.output)
    elif args.aggregate:
        # Aggregate the results
        aggregation(args.input, args.output)
    else:
        print("Must pass either --train or --aggregate")
        sys.exit()