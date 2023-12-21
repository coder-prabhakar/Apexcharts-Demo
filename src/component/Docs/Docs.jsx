import './Docs.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SeriesImage from '../../image/series.png';

function Docs() {
  return (
    <div className='Docs container'>
        {/***** apexcharts install *****/}
        <section className='apexchartInstall'>
            <h1>Apexcharts Install</h1>
            <div className='textCopySec' style={{width:"250px"}}>
                <div className='copyText'>npm i react-apexcharts</div>
                <CopyToClipboard text={"npm i react-apexcharts"}>
                <div className='copyTextBtn'><i class="uil uil-copy-alt"></i></div>
                </CopyToClipboard>
            </div>
        </section>
        {/***** apexcharts install *****/}
        <section>
            <h2>Apexcharts import</h2>
            <div className='textCopySec' style={{width:"450px"}}>
                <div className='copyText'>import ReactApexChart from 'react-apexcharts'</div>
                <CopyToClipboard text={`import ReactApexChart from 'react-apexcharts'`}>
                <div className='copyTextBtn'><i class="uil uil-copy-alt"></i></div>
                </CopyToClipboard>
            </div>
        </section>
        {/***** apexcharts syntax *****/}
        <section>
            <h2>Apexcharts syntax</h2>
            <div className='textCopySec' style={{width:"730px"}}>
                <div className='copyText'>&lt;ReactApexChart options&#61;&#123;options&#125; series&#61;&#123;series&#125; width&#61;"100%" height&#61;"100%"&#47;&gt;</div>
                <CopyToClipboard text={`<ReactApexChart options={options} series={series} width="100%" height="100%"/>`}>
                <div className='copyTextBtn'><i class="uil uil-copy-alt"></i></div>
                </CopyToClipboard>
            </div><br />
            <p>Apexcharts के अंदर प्रमुख 4 props दाले जाते है |</p>
            <ul>
                <li><span>&#9679;</span><span>options</span></li>
                <li><span>&#9679;</span><span>series</span></li>
                <li><span>&#9679;</span><span>width</span></li>
                <li><span>&#9679;</span><span>height</span></li>
            </ul>
        </section>
        {/***** series *****/}
        <section>
            <h3>Series</h3>
            <img src={SeriesImage} alt="seriesImage" />
            <p>Series को array के form मे लिखा जाता है | जितना डाटा का graph print करवाना हो उतना series के array के अंदर object के form मे डाटा डाला लिखा जाता है |</p>
        </section>
        {/***** options *****/}
        
    </div>
  )
}

export default Docs
