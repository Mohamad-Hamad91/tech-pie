import { Constant } from "./constant.model";

export const SKILL_LEVELS: Constant[] = [
    { value: 'NoVice' },
    { value: 'Beginner' },
    { value: 'Skillful' },
    { value: 'Experienced' },
    { value: 'Expert' }
];

export const GET_SKILL_VALUE = (val): number => {
    let _temp;
    switch (val) {
        case 'NoVice':
            _temp = 20;
            break;
        case 'Beginner':
            _temp = 40;
            break;
        case 'Skillful':
            _temp = 60;
            break;
        case 'Experienced':
            _temp = 80;
            break;
        case 'Expert':
            _temp = 100;
            break;
        default: _temp = 0;
    }
    return _temp;
}