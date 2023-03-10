import type { NextPage } from 'next';
import axios from 'axios';

import {
  Container,
  Main,
  MugContainer,
  DetailContainer,
  DescriptionHeader,
  DescriptionBody,
  Title,
  TitleBrand,
  Details,
  ControlContainer,
  ControlButton,
} from '../styles/main';
import BeerMug from '../assets/beer-mug';
import { useEffect, useState } from 'react';
import { IBeer } from './interfaces/beer.interface';

const HomePage: NextPage = () => {
  const [beer, setBeer] = useState<IBeer>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const randomBeer = async () => {
    try {
      const response = await axios.get<IBeer>('/api/beers');
      return response.data
    } catch (error) {
      console.log(error);
    }
  };

  const getBeerById = async (id: string) => {
    try {
      const response = await axios.get<IBeer>(`/api/beers/${id}`);
      return response.data
    } catch (error) {
      console.log(error);
    }
  };

  const loadWareHouse = (): string[] => {
    const beerWarehouseStr = localStorage.getItem('beerWarehouse');
    let beerWarehouse: string[] = [];
    if (beerWarehouseStr) {
      beerWarehouse = JSON.parse(beerWarehouseStr);
    }
    return beerWarehouse
  }

  const persistWareHouse = (warehouse: string[], beerId: string) => {
    warehouse.push(beerId);
    localStorage.setItem('beerWarehouse', JSON.stringify(warehouse));
  }

  const loadCurrentIndex = (): number => {
    const currentIndexStr = localStorage.getItem('currentIndex');
    let index = 0;
    if (currentIndexStr) {
      index = +currentIndexStr
    }
    persistCurrentIndex(index)
    return index
  }

  const persistCurrentIndex = (index: number) => {
    setCurrentIndex(index)
    localStorage.setItem('currentIndex', index.toString());
  }

  const loadNewBeer = async () => {
    const beerWarehouse = loadWareHouse()
    const newBeer = await randomBeer()
    if (newBeer) {
      persistWareHouse(beerWarehouse, newBeer._id)
      setBeer(newBeer);
    }
  }

  const loadBeerById = async (id: string) => {
    const newBeer = await getBeerById(id)
    if (newBeer) {
      setBeer(newBeer);
    }
  }

  const onHandlePrevious = () => {
    persistCurrentIndex(currentIndex - 1)
  };

  const onHandleNext = () => {
    persistCurrentIndex(currentIndex + 1)
  };

  useEffect(() => {
    loadCurrentIndex()
  }, []);

  useEffect(() => {
    const wareHouse = loadWareHouse()
    const beerId = wareHouse[currentIndex]
    console.log('beerId', beerId)
    if (beerId) {
      loadBeerById(beerId)
    } else {
      loadNewBeer()
    }
  }, [currentIndex])

  return (
    <Container>
      {beer && (
        <>
          <Main>
            <MugContainer>
              <BeerMug size={300} blg={beer.blg} alcohol={beer.alcohol} ibu={beer.ibu} />
            </MugContainer>
            <DetailContainer>
              <DescriptionHeader>
                <Title>{beer.name}</Title>
                <hr />
                <TitleBrand>{beer.brand}</TitleBrand>
              </DescriptionHeader>
              <DescriptionBody>
                <p>
                  Hop: <Details>{beer.hop}</Details>
                </p>
                <p>
                  Yeast: <Details>{beer.yeast}</Details>
                </p>
                <p>
                  Malts: <Details>{beer.malts}</Details>
                </p>
                <p>
                  IBU: <Details>{beer.ibu} IBU</Details>
                </p>
                <p>
                  Alcohol: <Details>{beer.alcohol} %</Details>
                </p>
                <p>
                  BLG: <Details>{beer.blg} °Blg</Details>
                </p>
                <hr style={{margin: '10px 0'}}/>
                <p>Random Hit Count : {beer.randomCount}</p>
              </DescriptionBody>
            </DetailContainer>
          </Main>
          <ControlContainer>
            <ControlButton type='button' onClick={onHandlePrevious} disabled={currentIndex===0}>Previous</ControlButton>
            <ControlButton type='button' onClick={onHandleNext}>Next</ControlButton>
          </ControlContainer>
        </>
      )}
    </Container>
  );
};

export default HomePage;
