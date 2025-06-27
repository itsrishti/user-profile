import React, { useState } from 'react';
import Step1PersonalInfo from './components/Step1PersonalInfo';
import Step2Professional from './components/Step2Professional';
import Step3Preferences from './components/Step3Preferences';
import Summary from './components/Summary';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    profilePhoto: null,
    username: '',
    password: '',
    profession: '',
    companyName: '',
    addressLine1: '',
    country: '',
    state: '',
    city: '',
    subscription: 'Basic',
    newsletter: true,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div style={{ padding: '2rem' }}>
      {step === 1 && <Step1PersonalInfo formData={formData} setFormData={setFormData} next={nextStep} />}
      {step === 2 && <Step2Professional formData={formData} setFormData={setFormData} next={nextStep} back={prevStep} />}
      {step === 3 && <Step3Preferences formData={formData} setFormData={setFormData} next={nextStep} back={prevStep} />}
      {step === 4 && <Summary formData={formData} back={prevStep} />}
    </div>
  );
};

export default App;
