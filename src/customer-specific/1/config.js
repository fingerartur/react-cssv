
import srcAncona from '../../core/ancona.png';
import srcBari from '../../core/bari.png';
import { footer as footer1 } from './countriesFooter';

const decisions = new Map();
decisions.set('COUNTRIES_FOOTER', footer1);
decisions.set('CUSTOMER_ID', 1);
decisions.set('MAIN_THUMB_CORNERS_STYLE', {
    borderRadius: '40px'
});
decisions.set('MAIN_THUMB_DESCRIPTION', 'not clickable');
decisions.set('LARGE_IMAGES', [
    srcAncona,
    srcBari
]);

export default decisions;