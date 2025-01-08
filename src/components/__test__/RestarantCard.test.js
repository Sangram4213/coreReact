import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestrauruntCard ,{withPrioriy} from "../RestrauruntCard";
import MOCK_DATA from '../mocks/resCardMock.json';
import PRIORITY_DATA from '../mocks/priorityResdata.json';

it("should render RestaurantCard component with props Data",()=>{
    render(<RestrauruntCard {...MOCK_DATA}/>);

   const name = screen.getByText("THE FISHERMANS WHARF");

   expect(name).toBeInTheDocument();
});

it("should render RestarantCard component with Priority",()=>{

    // Higher Order component test
    const RestaurantCardWithPriority = withPrioriy(RestrauruntCard);
    render(<RestaurantCardWithPriority {...PRIORITY_DATA} />);

    const priorityLabel = screen.getByText(/Priority/i);
    expect(priorityLabel).toBeInTheDocument();
})