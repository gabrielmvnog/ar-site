import React from "react";

export default function Footer() {
  return (
    <section className="section-dark-gradient">
      <div className="pd-t-m pd-b-m txt-xs inner-container flex-col">
        <div className="max-wd-xx mg-auto">
          <div className="grid grid-2-col pd-t-x pd-b-x BS_grid-4-row BS_grid-2-col MS_grid-9-row MS_grid-1-col">
            <div>
              <img
                width="150px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR5PNQN5bcL-jNrYmUKZ4KCIxKi5FzYkITjw&usqp=CAU"
                alt="logo_footer"
              ></img>
            </div>
            <p className="mg-auto txt-center txt-xs">
              Le Quartier Hotel & Bureau <br /> SHN Quadra 01 Bloco A Sala 710
              <br /> CEP 70701-010 <br /> Brasília-DF <br />
              Fones: (61) 99998-9915 e (61) 99963-7273
            </p>
          </div>
        </div>
        <footer className="txt-align-c txt-grey">
          <small>Copyright © 2020 Alves Rocha Advogados</small>
        </footer>
      </div>
    </section>
  );
}
