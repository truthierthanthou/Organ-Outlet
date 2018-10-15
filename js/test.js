//Reference: Vanilla Wizard by Kauê Buriti https://codepen.io/kaueburiti/pen/YNZGZO

class Steps{
  constructor(wizard){
    this.wizard = wizard;
    //this.stepWidth = this.wizard.offsetWidth;
    this.steps = this.getSteps();
    this.currentStep = 0;
  }
  
  getSteps(){
    return this.wizard.getElementsByClassName('step');
  }

  getStepsQuantity(){
    return this.getSteps().length;
  }

  setCurrentStep(currentStep){
    this.currentStep = currentStep;
    this.updatePanelsPosition(currentStep);
  }

  hideStep(){

  }

/*
  //this is for completion
  handleStepsClasses(movement){
    if(movement > 0)
      this.steps[this.currentStep - 1].classList.add('-completed');
    else if(movement < 0)
      this.steps[this.currentStep].classList.remove('-completed');  
  }
*/
};


class Wizard{
  constructor(obj){
    this.wizard = obj;
    this.steps = new Steps(this.wizard);
    this.stepsQuantity = this.steps.getStepsQuantity();
    this.currentStep = this.steps.currentStep;
    
//    this.concludeControlMoveStepMethod = this.steps.handleConcludeStep.bind(this.steps);
//    this.wizardConclusionMethod = this.handleWizardConclusion.bind(this);
  }
  
/*  updateButtonsStatus(){
    if(this.currentStep === 0)
      this.previousControl.classList.add('disabled');
    else
      this.previousControl.classList.remove('disabled');
  }
*/
  
  updateCurrentStep(movement){   
    this.currentStep += movement;
    this.steps.setCurrentStep(this.currentStep);
    this.handleNextStepButton();
    //this.updateButtonsStatus();
  }
  
  handleNextStepButton(){  
  //changed this a bit 
      this.nextControl.innerHTML = 'Next';
      this.nextControl.addEventListener('click', this.nextControlMoveStepMethod);
      //this.nextControl.removeEventListener('click', this.concludeControlMoveStepMethod);
      //this.nextControl.removeEventListener('click', this.wizardConclusionMethod);
    }
  }
  
  /*
  handleWizardConclusion(){
    this.wizard.classList.add('completed');
  };
  */
  
  addControls(previousControl, nextControl){
  //  this.previousControl = previousControl;
    this.nextControl = nextControl;
  //  this.previousControlMoveStepMethod = this.moveStep.bind(this, -1);
    this.nextControlMoveStepMethod = this.moveStep.bind(this, 1);
    
  //  previousControl.addEventListener('click', this.previousControlMoveStepMethod);
    nextControl.addEventListener('click', this.nextControlMoveStepMethod);
    
  //  this.updateButtonsStatus();
  }
  
  moveStep(movement){
    if(this.validateMovement(movement)){
      this.updateCurrentStep(movement);
      //this.steps.handleStepsClasses(movement);
    }else{
       throw('This was an invalid movement');
    }
  }
  
  validateMovement(movement){
    const fowardMov = movement > 0 && this.currentStep < this.stepsQuantity - 1;
    const backMov = movement < 0 && this.currentStep > 0;
    return fowardMov || backMov;
  }
