const nameRegex = /^[a-zA-Z]{4,}$/;
const addressRegex = /^[a-zA-Z0-9\s,'-]{3,}$/;
const mobileRegex = /^[0-9]{10}$/;

export const validateFields = (name: string, address: string, mobile: string): string => {
  return nameRegex.test(name)
    ? addressRegex.test(address)
      ? mobileRegex.test(mobile)
        ? ""
        : "Invalid Mobile Number"
      : "Invalid Address"
    : "Invalid Name";
};

export const validateName = (name: string) => {
  return nameRegex.test(name);
};

export const validateAddress = (address: string) => {
  return addressRegex.test(address);
};

export const validateMobile = (mobile: string) => {
  return mobileRegex.test(mobile);
};

export const maxDate = () => {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = (date.getFullYear() - 18).toString();
  return `${year}-${month}-${day}`;
};

export const minDate = () => {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = (date.getFullYear() - 50).toString();
  return `${year}-${month}-${day}`;
};
