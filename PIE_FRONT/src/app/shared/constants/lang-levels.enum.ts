import { Constant } from "./constant.model";

export const LANG_LEVELS: Constant[] = [
    { value: 'A1', label: 'A1' },
    { value: 'A2', label: 'A2' },
    { value: 'Working_Knowledge', label: 'Working Knowledge' },
    { value: 'B1', label: 'B1' },
    { value: 'Good_Working_Knowledge', label: 'Good Working Knowledge' },
    { value: 'Very_Good_Command', label: 'Very Good Command' },
    { value: 'B2', label: 'B2' },
    { value: 'C1', label: 'C1' },
    { value: 'Highly_Proficient', label: 'Highly Proficient' },
    { value: 'C2', label: 'C2' },
    { value: 'Native_Speaker', label: 'Native Speaker' }
];

export const  GET_LANG_VALUE = (val): number => {
    let _temp;
    switch (val) {
      case 'A1':
        _temp = 10;
        break;
      case 'A2':
        _temp = 20;
        break;
      case 'Working_Knowledge': case 'B1':
        _temp = 30;
        break;
      case 'Good_Working_Knowledge':
        _temp = 40;
        break;
      case 'Very_Good_Command': case 'B2':
        _temp = 50;
        break;
      case 'C1': case 'Highly_Proficient':
        _temp = 70;
        break;
      case 'C2':
        _temp = 80;
        break;
      case 'Native_Speaker':
        _temp = 100;
        break;
      default: _temp = 0;
    }
    return _temp;
  };

