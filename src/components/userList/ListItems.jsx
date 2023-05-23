import "./style.css";
import { useEffect, useState } from "react";
import HeaderList from "./ListHeader";

const ListItems = () => {
    const [data, setData] = useState([]);

    const handleData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((e) => e.json())
            .then((json) => setData(json))
            .catch((error) => console.log(`ERROR - ${error}`));
    };

    useEffect(handleData, []);

    return (
        <>
            <div className="headline">
                <h1>All Customers</h1>
            </div>
            <table>
                <HeaderList />
                <tbody>
                    {data.map((e) => {
                        return (
                            <tr className="TableRow">
                                <td>{e.name}</td>
                                <td>{e.company.name}</td>
                                <td>
                                    {e.phone.length > 13
                                        ? e.phone.slice(0, 13)
                                        : e.phone}
                                </td>
                                <td>{e.email}</td>
                                <td>{e.address.street}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default ListItems;
