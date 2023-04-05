import React, { useState } from "react";

const OnBoardingFlow = ({ children, onFinish, currentIndex, onNext }) => {
  const [onboardingData, setOnboardingData] = useState({});

  // this function gets passed to all childs and being fired there, each element should pass its own data object to it
  // so I can collect the data from each single child through the process
  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1;

    const updatedData = {
      ...onboardingData,
      ...stepData,
    };

    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updatedData);
    }

    setOnboardingData(updatedData);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }
  return currentChild;
};

export default OnBoardingFlow;
