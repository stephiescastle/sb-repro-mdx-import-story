export const ButtonTemplate = ({ label, disabled }) => {
  return `
      <button 
        disabled="${disabled}"
        class=""
      >
          ${label}
      </button>
    `;
};
