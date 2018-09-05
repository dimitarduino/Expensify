import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import dotenv from 'dotenv';

// Setup enzyme's react adapter
Enzyme.configure({
    adapter: new EnzymeAdapter()
});

dotenv.config({
    path: '.env.test'
})