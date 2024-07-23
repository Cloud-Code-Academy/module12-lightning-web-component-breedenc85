import { LightningElement } from 'lwc';
const devFundWeight = .23;
const processAutomationWeight = .30;
const userInterfaceWeight = .25;
const testingWeight = .22;

export default class PlatformDevCertCalculator extends LightningElement {

    devFundamentalScore = 50;
    processAutomationScore = 50;
    userInterfaceScore = 50;
    testingScore = 50;

    certificationScore = 90;

    calculateScore() {
        let devFundWeightScore = this.devFundamentalScore * devFundWeight;
        let processAutomationWeightScore = this.processAutomationScore * processAutomationWeight;
        let userInterfaceWeightScore = this.userInterfaceScore * userInterfaceWeight;
        let testingWeightScore = this.testingScore * testingWeight;

        this.certificationScore = devFundWeightScore + processAutomationWeightScore + userInterfaceWeightScore + testingWeightScore;
    }

        handleChange(event){
            console.log(event.target.value, event.target.value);
            const inputName = event.target.name;
            let value = Number(event.target.value)
            if (inputName === 'devFundamentals') {
                this.devFundamentalScore = value;
            } else if (inputName === 'processAuto') {
                this.processAutomationScore = value;
            } else if (inputName === 'userInterface') {
                this.userInterfaceScore = value;
            } else if (inputName === 'testDebugDeploy') {
                this.testingScore = value;
        }
    }
}
