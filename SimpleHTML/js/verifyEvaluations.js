const validate = (inputId, callback, errorMsg) => {
  const isValid = callback(document.getElementById(inputId)?.value);
  if (!isValid) throw new Error(errorMsg);
  return isValid;
};

const registerEvaluation = () => {
  try {
    validate('name-register', v => v.trim() !== '', 'Insira um nome');
    validate('subject-register', v => v !== null, 'Selecione uma Cadeira');
    validate('description-register', v => v.trim() !== '', 'Insira uma descrição');
    validate('date-register', d => !isNaN(Date.parse(d)), 'Insira uma data válida');

    window.location.reload();
  } catch (error) {
    window.alert(error.message);
  }
};

const updateEvaluation = () => {
  try {
    validate('name-update', v => v.trim() !== '', 'Insira um nome');
    validate('subject-update', v => v !== null, 'Selecione uma Cadeira');
    validate('description-update', v => v.trim() !== '', 'Insira uma descrição');
    validate('date-update', d => !isNaN(Date.parse(d)), 'Insira uma data válida');

    window.location.reload();
  } catch (error) {
    window.alert(error.message);
  }
};
