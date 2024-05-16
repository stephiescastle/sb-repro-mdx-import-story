export const ImportedButtonTemplate = ({ label, disabled }) => {
  return `
      <button 
        disabled="${disabled}"
        class=""
      >
          ${label}
      </button>
    `;
};
