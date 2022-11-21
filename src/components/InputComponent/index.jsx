import './styles.scss';
import Select from 'react-select';
import { ReactComponent as Flag } from './../../assets/svg/usa.svg';

const LanguageDropDown = ({
  className,
  options,
  label,
  placeholder,
  isSearchable,
}) => {
  const placeholderText = placeholder
    ? placeholder
    : 'Select ' + (label ? label : '');

  return (
    <div className={`input_box dropdown ${className ? className : ''}`}>
      <Flag />
      {label && <div className='label'>{label}</div>}

      <Select
        placeholder={placeholderText}
        options={options}
        isSearchable={isSearchable}
      />
    </div>
  );
};

export { LanguageDropDown };
