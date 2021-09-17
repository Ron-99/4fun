import {useState, useEffect} from "react";
import {useListSubscriptionQuery} from "../../services/Subscription/listSubscriptionQuery";
import exportFromJSON from 'export-from-json'
import {AdminStyle} from "./style";
import Button from "../../components/Button";
import Table from "../../components/Table";
import {ContentStyle} from "../Home/style";

function Adm() {
  const { data } = useListSubscriptionQuery();
  const [thead, setThead] = useState([]);
  const [tbody, setTbody] = useState([]);

  useEffect(() => {
    if (!!data) {
      setThead(Object.keys(data[0]));
      const contents = [];
      data.forEach((value) => {
        contents.push(Object.values(value));
      });

      setTbody(contents);
    }
  }, [data]);

  const exportToExcel = () => {
    exportFromJSON({data: data, fileName: 'download', exportType: exportFromJSON.types.csv})
  }

  return(
    <AdminStyle>
      <ContentStyle>
        <Button onClick={exportToExcel}>Exportar</Button>
        <Table thead={thead} tbody={tbody} />
      </ContentStyle>

    </AdminStyle>
  )
}

export default Adm;
