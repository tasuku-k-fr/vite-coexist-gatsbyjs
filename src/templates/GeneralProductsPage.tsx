import * as React from 'react';



type Props = {
  children?: React.ReactNode;

};

const GeneralProductsPage: React.FC<Props> = ({
  children,

}) => {

  return (
      <div className={`wwwfreee-personal g-container sp`}>
        <main className="g-pageMain">
          {children}

        </main>
      </div>
  );
};
export default GeneralProductsPage;
