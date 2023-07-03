import Layout from "../components/Layout/Layout";
import TeamSingle from "../components/TeamSingle/TeamSingle";
import data from "../data.json";
import { useParams } from "react-router-dom";

const TeamPage = () => {
  const id = useParams();

  let currentTeam = parseInt(id.id);

  switch (currentTeam) {
    case 0:
      return <Layout>{<TeamSingle data={data.administration} />}</Layout>;
    case 1:
      return <Layout>{<TeamSingle data={data.management} />}</Layout>;
    case 2:
      return <Layout>{<TeamSingle data={data.staff} />}</Layout>;

    default:
      return null;
  }
};

export default TeamPage;
