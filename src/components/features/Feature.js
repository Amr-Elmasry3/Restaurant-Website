import "./feature.css";
import { featureItems } from "../../Data";

export default function Feature() {
  const featureItemsList = featureItems.map((feature) => {
    return (
      <div className="box" key={feature.id}>
        <div className="img">
          <img src={feature.img} alt="" />
        </div>
        <h1 className="number">0{feature.id}</h1>
        <h4 className="title">{feature.title}</h4>
        <p className="description">{feature.description}</p>
      </div>
    );
  });

  return (
    <div className="features">
      <div className="container">{featureItemsList}</div>
    </div>
  );
}
