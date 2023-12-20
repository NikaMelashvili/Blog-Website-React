import './filtering.css';

export default function Filtering() {
  return (
    <div className='container-filter'>
      <ul className='filter-body'>
        <li className='filter-choices'>მარკეტი</li>
        <li className='filter-choices'>აპლიკაცია</li>
        <li className='filter-choices'>ხელოვნური ინტელექტი</li>
        <li className='filter-choices'>UI/UX</li>
        <li className='filter-choices'>კვლევა</li>
        <li className='filter-choices'>Figma</li>
      </ul>
    </div>
  );
}
