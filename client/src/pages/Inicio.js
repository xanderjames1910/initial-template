// import React, { useContext } from 'react';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Card, Dimmer, Loader, Grid } from 'semantic-ui-react';
import { Line } from 'react-chartjs-2';

// import { AuthContext } from '../context/auth';
import { FETCH_DAILY_DATA_QUERY } from '../util/graphql';
import MapIPP from '../components/MapIPP';

const Inicio = () => {
  // const { user } = useContext(AuthContext);

  let datosDiarios = '';
  const { loading, data } = useQuery(FETCH_DAILY_DATA_QUERY);

  if (data) {
    datosDiarios = { data: data.getDataDiaria };
  }

  const chartData =
    datosDiarios &&
    datosDiarios.data.reduce(
      (res, individulData) => {
        const { COMPLETAMIENTO, FECHA, PD_PETROLEO, PD_GAS, PD_AGUA } = individulData;
        res[0].push(COMPLETAMIENTO);
        res[1].push(FECHA);
        res[2].push(PD_GAS);
        res[3].push(PD_AGUA);
        res[4].push(PD_PETROLEO);
        return res;
      },
      [[], [], [], [], []],
    ); // start with an array of 4 empty arrays into which we can push our values

  const dataForChart = {
    labels: chartData[1],
    datasets: [
      {
        label: 'Producción de Gas',
        fill: false,
        lineTension: 0.0,
        backgroundColor: 'rgba(219, 40, 40, 0.4)',
        borderColor: 'rgba(219, 40, 40, 1)',
        borderDash: [],
        borderDashOffset: 0.0,
        borderWidth: 1,
        pointBorderColor: 'rgba(219, 40, 40, 1)',
        pointBackgroundColor: 'rgba(219, 40, 40, 0.4)',
        pointBorderWidth: 1,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: 'rgba(219, 40, 40, 1)',
        pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
        pointHoverBorderWidth: 2,
        data: chartData[2],
      },
      {
        label: 'Producción de Agua',
        fill: false,
        lineTension: 0.0,
        backgroundColor: 'rgba(33, 133, 208, 0.4)',
        borderColor: 'rgba(33, 133, 208, 1)',
        borderDash: [],
        borderDashOffset: 0.0,
        borderWidth: 1,
        pointBorderColor: 'rgba(33, 133, 208, 1)',
        pointBackgroundColor: 'rgba(33, 133, 208, 0.4)',
        pointBorderWidth: 1,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: 'rgba(33, 133, 208, 1)',
        pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
        pointHoverBorderWidth: 2,
        data: chartData[3],
      },
      {
        label: 'Producción de Petroleo',
        fill: false,
        lineTension: 0.0,
        backgroundColor: 'rgba(33, 186, 69, 0.4)',
        borderColor: 'rgba(33, 186, 69, 1)',
        borderDash: [],
        borderDashOffset: 0.0,
        borderWidth: 1,
        pointBorderColor: 'rgba(33, 186, 69, 1)',
        pointBackgroundColor: 'rgba(33, 186, 69, 0.4)',
        pointBorderWidth: 1,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: 'rgba(33, 186, 69, 1)',
        pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
        pointHoverBorderWidth: 2,
        data: chartData[4],
      },
    ],
  };

  return (
    <div>
      <Grid>
        <Grid.Column width={6}>
          <MapIPP />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card style={{ width: '100%' }}>
            <Card.Content header='Monitoreo de Producción' />
            <Card.Content style={{ height: 350 }}>
              {loading ? (
                <Dimmer active>
                  <Loader>Cargando datos...</Loader>
                </Dimmer>
              ) : (
                <Line data={dataForChart} width={600} height={350} options={{ maintainAspectRatio: false }} />
              )}
            </Card.Content>
            {/* <Card.Content extra>
          <Icon name='user' />4 Friends
        </Card.Content> */}
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Inicio;
