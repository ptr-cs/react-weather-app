import { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const PastPrecipitation = ({ data }: { data: number[] }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }
        chartInstanceRef.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['1', '3', '6', '9', '12', '18', '24'],
            datasets: [
              {
                label: 'Precipitation',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.9)',
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
              x: {
                ticks: {
                  color: 'white', // Set x-axis text color to white
                  font: {
                    size: 16, // Increase legend font size
                  },
                },
                grid: {
                  color: 'white', // Set y-axis grid lines to white
                },
              },
              y: {
                ticks: {
                  color: 'white', // Set x-axis text color to white
                  font: {
                    size: 16, // Increase legend font size
                  },
                },
                grid: {
                  color: 'white', // Set y-axis grid lines to white
                },
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Inches',
                  color: 'white',
                  font: {
                    size: 16, // Increase legend font size
                  },
                },
              },
            },
            plugins: {
              legend: {
                labels: {
                  color: 'white', // Set legend text color to white
                  font: {
                    size: 16, // Increase legend font size
                  },
                },
              },
            },
          },
        });
      }
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <Container className='h-100 d-flex flex-column'>
      <Row className="flex-grow-1 d-flex align-items-center justify-content-center">
        <Col xs={12}>
          <div>
            <canvas ref={chartRef} />
            </div>
          </Col>
      </Row>
      <Row className="auto-height">
        <Col className="d-flex justify-content-start align-items-end">
          <span>Past Precip. Summary (in)</span>
        </Col>
      </Row>
    </Container>
  );
};

export default PastPrecipitation;