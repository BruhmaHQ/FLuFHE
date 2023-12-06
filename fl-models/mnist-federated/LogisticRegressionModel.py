import pickle
from pathlib import Path

import utils
import numpy

from concrete.ml.sklearn import LogisticRegression

if __name__ == "__main__":
    path_to_model = Path("./model.pkl")
    if not path_to_model.exists() or not path_to_model.is_file():
        raise ValueError(
            "404 no model file'.\n"
            "run bash to run model"
        )
    with path_to_model.open("rb") as file:
        sklearn_model = pickle.load(file)

    number_of_compile_samples = 1000
    compile_set = numpy.random.randint(0, 255, (number_of_compile_samples, 784)).astype(float)
    sklearn_model.classes_ = sklearn_model.classes_.astype(int)
    model = LogisticRegression.from_sklearn_model(sklearn_model, compile_set)
    model.compile(compile_set)

    (_, _), (X_test, y_test) = federated_utils.load_mnist()

    concrete_predictions = model.predict(X_test)
    sklearn_predictions = sklearn_model.predict(X_test)
    simulation_predictions = model.predict(X_test, fhe="simulate")

    # print(
    #     (concrete_predictions == sklearn_predictions).sum() / len(y_test),
    #     "quantized vs scikit-learn",
    # )
    # print(
    #     (concrete_predictions == simulation_predictions).sum() / len(y_test),
    #     "quantized vs simulation",
    # )
    # print(
    #     (simulation_predictions == sklearn_predictions).sum() / len(y_test),
    #     "simulation vs scikit-learn",
    # )

    # print((concrete_predictions == y_test).sum() / len(y_test), "quantized accuracy")
    # print((sklearn_predictions == y_test).sum() / len(y_test), "scikit-learn accuracy")
    # print((simulation_predictions == y_test).sum() / len(y_test), "simulation accuracy")