// Import stylesheets
import './style.css';


const form: HTMLFormElement | null = document.querySelector('#defineform');
if(form != null) {
  form.onsubmit = () => {
  const formData = new FormData(form);

  console.log(formData);
  const text = formData.get('defineword') as string;
  console.log(text);
  return false; // prevent reload
}
}
;