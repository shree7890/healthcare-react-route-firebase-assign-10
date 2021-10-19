
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './Details.css';
const Details = () => {
    let { id } = useParams();
    let history = useHistory();
    const [employeesDetails, setEmployeesDetails] = useState([]);

    const [singleEmployee, setSingleEmployee] = useState({});
    const handleOnclick = () => {
        history.push("/contact")
    }
    const clickServices = () => {
        history.push("/services");
    }
    //  data load howa
    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setEmployeesDetails(data));
    }, []);

    // call hbe jokon amar shob data load hye state e set hbe
    useEffect(() => {
        const foundEmployee = employeesDetails.find(
            (employee) => employee.id === id
        );
        setSingleEmployee(foundEmployee);
    }, [employeesDetails]);
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-4 ">
                        <div className="to-let-section p-5">
                            <h6 className="text-white fw-600" >Emergency Cases</h6>
                            <h3 className="my-3" style={{ color: "#1BBDE4" }}>{singleEmployee?.to_let}</h3>
                            <p className="text-white fw-600">{singleEmployee?.state}</p>
                            <button onClick={handleOnclick} className="btn-common mt-3">Contact Us</button>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div>
                            <img className="img-fluid" src={singleEmployee?.imgthumb} alt="" />
                        </div>
                        <div className="mt-4">
                            <h3 className="fw-bold my-3" style={{ color: "#081839" }}>{singleEmployee?.name}</h3>
                            <h4 className="text-black fw-700 my-3">{singleEmployee?.title}</h4>
                            <p style={{ color: "#666", fontWeight: "500" }}>{singleEmployee?.descrip}</p>
                            <button className="mt-4 btn-common" onClick={clickServices}>Go to Services</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;