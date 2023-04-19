import { render, screen } from '@testing-library/react';
import { PetProfile } from "../components/molecules/petProfile/index";

const pet = {
    "id": 1,
    name: "Daamin",
    species: "Cat",
    available: false,
    birthYear: 2012,
    dateAdded: "19-06-2021",
    photoUrl: "https://i.imgur.com/wpfirW7l.jpg"
};

describe("Profile", () => {
    const renderProfile = () =>
        render(
            <PetProfile
                result={pet}
            />
        );

    test("renders pets profile", () => {
        renderProfile();
        expect(screen.getByText(/Daamin/i)).toBeInTheDocument();
    });
});