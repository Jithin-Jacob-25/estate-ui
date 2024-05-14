import { listData } from '../../libraries/dummyData'

const ListPage = () => {

  const data = listData;

  return (
    <div className='listPage'>
      <div className="listContainer">List</div>
      <div className="mapContainer">Map</div>
    </div>
  )
}

export default ListPage
