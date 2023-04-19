import { shallow } from 'enzyme';
import App from './App';
import Header from '../src/components/molecules/header';

it("renders without crashing", () => {
  shallow(<App />);
});

// it("renders header", () => {
//   const app = shallow(<App />);
//   const header = <Header />;
//   expect(app.contains(header)).toEqual(true);
// });
