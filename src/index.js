import { greetings } from "./greetings";
import './styles/styles.css';
import './styles/scss.scss';

const container = document.querySelector('.container');

container.append(greetings());