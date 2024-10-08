import Header from "./Header.component";
import Nav from "./Nav.component";
import { BiFoodMenu } from "react-icons/bi";
export default function MenuHeader() {

    return (
        <Header className="">
            <Nav className="group transition ease-in delay-150">
                <div className="flex justify-center group-[:hover]:w-28 w-0 transition-all ease-in delay-150">
                    <Point color="red"/>
                    <Point color="#f4d35e"/>
                    <Point color="#57cc99"/>
                </div>
                <BiFoodMenu className="text-3xl" />
            </Nav>
        </Header>
    );
}

function Point({color}:{color?: string}){
    return (
        <svg fill={color} width="20px" height="20px" viewBox="0 0 125 125">
            <ellipse cx="50" cy="50" rx="50" ry="50"></ellipse>
        </svg>
    )
}