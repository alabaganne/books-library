import { useParams } from 'react-router-dom';

export default function ShowBook({ params }: any) {
  const { id } = useParams();

  return <div>Show Book: {id}</div>;
}
