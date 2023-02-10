import Link from "next/link";
import classes from "./pagination.module.css";

function Pagination(props) {
  const { jumlahHalaman, halamanAktif } = props;

  let halaman = [];
  for (let index = 1; index <= jumlahHalaman; index++) {
    halaman.push(index);
  }

  return (
    <div className={classes.main}>
      <ul>
        {/* Left Arrow */}
        {halamanAktif == 1 ? (
          ""
        ) : (
          <Link href={`/projects/${halamanAktif - 1}`}>
            <div>
              <li>
                <i className="fa-solid fa-arrow-left"></i>
              </li>
            </div>
          </Link>
        )}
        {/* Number Pagination */}
        {halaman.map((i) =>
          i == halamanAktif ? (
            <Link key={i} href={`/projects/${i}`}>
              <div className={classes.pilih}>
                <li>{i}</li>
              </div>
            </Link>
          ) : (
            <Link key={i} href={`/projects/${i}`}>
              <div>
                <li>{i}</li>
              </div>
            </Link>
          )
        )}
        {/* Right Arroe */}
        {halamanAktif == jumlahHalaman ? (
          ""
        ) : (
          <Link href={`/projects/${halamanAktif + 1}`}>
            <div>
              <li>
                <i className="fa-solid fa-arrow-right"></i>
              </li>
            </div>
          </Link>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
