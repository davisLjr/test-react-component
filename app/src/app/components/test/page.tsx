import { Access, AccessContent, AccessDescription, AccessLink, AccessTitle, Alert, Banner, Button } from "@gcba/reactobelisco";

export default function TestPage() {
  return (
    <>
      <div className="container pt-5">
        <Access
          title="Access title"
          description="descripción"
          url="www.gcba.com"
          size="small"
        >
          <span className="material-symbols-rounded o-icon" aria-hidden="true">
            info
          </span>
        </Access>

        <br />

        <Access
          title="Access title"
          description="descripción"
          url="www.gcba.com"
          size="large"
        >
          <span className="material-symbols-rounded o-icon" aria-hidden="true">
            info
          </span>
        </Access>

        <br />

        <AccessLink url="" className="" size="small">
          <span className="material-symbols-rounded o-icon" aria-hidden="true">
            info
          </span>
          <AccessContent>
            <AccessTitle title="Titulo" />
            <AccessDescription description="Descripción" />
          </AccessContent>
        </AccessLink>

        <br />

        <AccessLink url="" className="" size="large">
          <span className="material-symbols-rounded o-icon" aria-hidden="true">
            info
          </span>
          <AccessContent>
            <AccessTitle title="Titulo" />
            <AccessDescription description="Descripción" />
          </AccessContent>
        </AccessLink>

        <br />

        <div className="access-items-4">
          <div className="col">
            <Access
              title="Access title"
              description="descripción"
              url="www.gcba.com"
              size="small"
            >
              <span
                className="material-symbols-rounded o-icon"
                aria-hidden="true"
              >
                info
              </span>
            </Access>
          </div>
          <div className="col">
            <Access
              title="Access title"
              description="descripción"
              url="www.gcba.com"
              size="small"
            >
              <span
                className="material-symbols-rounded o-icon"
                aria-hidden="true"
              >
                info
              </span>
            </Access>
          </div>
          <div className="col">
            <Access
              title="Access title"
              description="descripción"
              url="www.gcba.com"
              size="small"
            >
              <span
                className="material-symbols-rounded o-icon"
                aria-hidden="true"
              >
                info
              </span>
            </Access>
          </div>
          <div className="col">
            <Access
              title="Access title"
              description="descripción"
              url="www.gcba.com"
              size="small"
            >
              <span
                className="material-symbols-rounded o-icon"
                aria-hidden="true"
              >
                info
              </span>
            </Access>
          </div>
          <div className="col">
            <Access
              title="Access title"
              description="descripción"
              url="www.gcba.com"
              size="small"
            >
              <span
                className="material-symbols-rounded o-icon"
                aria-hidden="true"
              >
                info
              </span>
            </Access>
          </div>
        </div>

        <br />

        <Alert alertInfo>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad
            obca
          </p>
        </Alert>

        <br />

        <Alert alertWarning>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad
            obca
          </p>
        </Alert>

        <br />

        <Alert alertSuccess>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad
            obca
          </p>
        </Alert>

        <br />

        <Alert alertDanger>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad
            obca
          </p>
        </Alert>

        <br />

        <div
          className="alert alert-info alert-dismissible fade show"
          role="alert"
        >
          <p>Esta es la descripción de una alerta de información.</p>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Cerrar"
          ></button>
        </div>

        <br />

        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <p>Esta es la descripción de una alerta de éxito.</p>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Cerrar"
          ></button>
        </div>

        <br />

        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <p>Esta es la descripción de una alerta de advertencia.</p>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Cerrar"
          ></button>
        </div>

        <br />

        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <p>Esta es la descripción de una alerta de error.</p>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Cerrar"
          ></button>
        </div>

        <br />

        <div className="alert alert-info" role="alert">
          <p>
            <strong>Este es un destacado de una alerta de información. </strong>
            Esta es la descripción de una alerta de información que continua al
            texto destacado, incluso <a href="#">con enlaces</a>.
          </p>
        </div>

        <br />

        <div className="alert alert-success" role="alert">
          <p>
            <strong>Este es un destacado de una alerta de éxito. </strong>
            Esta es la descripción de una alerta de éxito que continua al texto
            destacado, incluso <a href="#">con enlaces</a>.
          </p>
        </div>

        <br />

        <div className="alert alert-warning" role="alert">
          <p>
            <strong>Este es un destacado de una alerta de advertencia. </strong>
            Esta es la descripción de una alerta de advertencia que continua al
            texto destacado, incluso <a href="#">con enlaces</a>.
          </p>
        </div>

        <br />

        <div className="alert alert-danger" role="alert">
          <p>
            <strong>Este es un destacado de una alerta de error. </strong>
            Esta es la descripción de una alerta de error que continua al texto
            destacado, incluso <a href="#">con enlaces</a>.
          </p>
        </div>

        <br />

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button type="button" isPrimary>
            Primario
          </Button>
          <Button type="button" isSecondary>
            Secundario
          </Button>
          <Button type="button" isSuccess>
            Éxito
          </Button>
          <Button type="button" isDanger>
            Error
          </Button>
          <Button type="button" isLink>
            Link
          </Button>
        </div>

        <br />

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button type="button" isOutlinePrimary>
            Primario
          </Button>
          <Button type="button" isOutlineSecondary>
            Secundario
          </Button>
          <Button type="button" isOutlineSuccess>
            Éxito
          </Button>
          <Button type="button" isOutlineDanger>
            Error
          </Button>
          <Button type="button" isOutlineLink>
            Link
          </Button>
        </div>

        <p>sizes</p>

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button type="button" isPrimary size="sm">
            Primario
          </Button>
          <Button type="button" isSecondary size="sm">
            Secundario
          </Button>
          <Button type="button" isSuccess size="sm">
            Éxito
          </Button>
          <Button type="button" isDanger size="sm">
            Error
          </Button>
          <Button type="button" isLink size="sm">
            Link
          </Button>
        </div>

        <br />

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button type="button" isOutlinePrimary size="sm">
            Primario
          </Button>
          <Button type="button" isOutlineSecondary size="sm">
            Secundario
          </Button>
          <Button type="button" isOutlineSuccess size="sm">
            Éxito
          </Button>
          <Button type="button" isOutlineDanger size="sm">
            Error
          </Button>
          <Button type="button" isOutlineLink size="sm">
            Link
          </Button>
        </div>

        <br />

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button type="button" isPrimary size="lg">
            Primario
          </Button>
          <Button type="button" isSecondary size="lg">
            Secundario
          </Button>
          <Button type="button" isSuccess size="lg">
            Éxito
          </Button>
          <Button type="button" isDanger size="lg">
            Error
          </Button>
          <Button type="button" isLink size="lg">
            Link
          </Button>
        </div>

        <br />

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button type="button" isOutlinePrimary size="lg">
            Primario
          </Button>
          <Button type="button" isOutlineSecondary size="lg">
            Secundario
          </Button>
          <Button type="button" isOutlineSuccess size="lg">
            Éxito
          </Button>
          <Button type="button" isOutlineDanger size="lg">
            Error
          </Button>
          <Button type="button" isOutlineLink size="lg">
            Link
          </Button>
        </div>

        <br />

        <p>Deshabilitado</p>

        <br />

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button type="button" isPrimary disabled>
            Primario
          </Button>
          <Button type="button" isSecondary disabled>
            Secundario
          </Button>
          <Button type="button" isSuccess disabled>
            Éxito
          </Button>
          <Button type="button" isDanger disabled>
            Error
          </Button>
          <Button type="button" isLink disabled>
            Link
          </Button>
        </div>

        <br />

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button type="button" isOutlinePrimary disabled>
            Primario
          </Button>
          <Button type="button" isOutlineSecondary disabled>
            Secundario
          </Button>
          <Button type="button" isOutlineSuccess disabled>
            Éxito
          </Button>
          <Button type="button" isOutlineDanger disabled>
            Error
          </Button>
          <Button type="button" isOutlineLink disabled>
            Link
          </Button>
        </div>

        <p>sizes</p>

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button type="button" isPrimary size="sm" disabled>
            Primario
          </Button>
          <Button type="button" isSecondary size="sm" disabled>
            Secundario
          </Button>
          <Button type="button" isSuccess size="sm" disabled>
            Éxito
          </Button>
          <Button type="button" isDanger size="sm" disabled>
            Error
          </Button>
          <Button type="button" isLink size="sm" disabled>
            Link
          </Button>
        </div>

        <br />

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button type="button" isOutlinePrimary size="sm" disabled>
            Primario
          </Button>
          <Button type="button" isOutlineSecondary size="sm" disabled>
            Secundario
          </Button>
          <Button type="button" isOutlineSuccess size="sm" disabled>
            Éxito
          </Button>
          <Button type="button" isOutlineDanger size="sm" disabled>
            Error
          </Button>
          <Button type="button" isOutlineLink size="sm" disabled>
            Link
          </Button>
        </div>

        <br />

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button type="button" isPrimary size="lg" disabled>
            Primario
          </Button>
          <Button type="button" isSecondary size="lg" disabled>
            Secundario
          </Button>
          <Button type="button" isSuccess size="lg" disabled>
            Éxito
          </Button>
          <Button type="button" isDanger size="lg" disabled>
            Error
          </Button>
          <Button type="button" isLink size="lg" disabled>
            Link
          </Button>
        </div>

        <br />

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button type="button" isOutlinePrimary size="lg" disabled>
            Primario
          </Button>
          <Button type="button" isOutlineSecondary size="lg" disabled>
            Secundario
          </Button>
          <Button type="button" isOutlineSuccess size="lg" disabled>
            Éxito
          </Button>
          <Button type="button" isOutlineDanger size="lg" disabled>
            Error
          </Button>
          <Button type="button" isOutlineLink size="lg" disabled>
            Link
          </Button>
        </div>

        <br />

        <p>expandible</p>

        <br />

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button type="button" isPrimary isExpanded>
            Primario
          </Button>
          <Button type="button" isSecondary isExpanded>
            Secundario
          </Button>
          <Button type="button" isSuccess isExpanded>
            Éxito
          </Button>
          <Button type="button" isDanger isExpanded>
            Error
          </Button>
          <Button type="button" isLink isExpanded>
            Link
          </Button>
        </div>

        <br />

        <p>Con icono</p>

        <br />

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button type="button" isPrimary>
            <span className="material-symbols-rounded o-icon">library_add</span>
            Primario
          </Button>
          <Button type="button" isSecondary>
            <span className="material-symbols-rounded o-icon">library_add</span>
            Secundario
          </Button>
          <Button type="button" isSuccess>
            <span className="material-symbols-rounded o-icon">library_add</span>
            Éxito
          </Button>
          <Button type="button" isDanger>
            <span className="material-symbols-rounded o-icon">library_add</span>
            Error
          </Button>
          <Button type="button" isLink>
            <span className="material-symbols-rounded o-icon">library_add</span>
            Link
          </Button>
        </div>

        <br />

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button type="button" isPrimary>
            <span className="material-symbols-rounded o-icon">library_add</span>
          </Button>
          <Button type="button" isSecondary>
            <span className="material-symbols-rounded o-icon">library_add</span>
          </Button>
          <Button type="button" isSuccess>
            <span className="material-symbols-rounded o-icon">library_add</span>
          </Button>
          <Button type="button" isDanger>
            <span className="material-symbols-rounded o-icon">library_add</span>
          </Button>
          <Button type="button" isLink>
            <span className="material-symbols-rounded o-icon">library_add</span>
          </Button>
        </div>

        <br />

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button type="button" isPrimary>
            <div
              className="spinner-border text-light spinner-border-sm"
              role="status"
            >
              <span className="sr-only">Cargando...</span>
            </div>
            Botón
          </Button>
          <Button type="button" isSecondary>
            <div
              className="spinner-border text-light spinner-border-sm"
              role="status"
            >
              <span className="sr-only">Cargando...</span>
            </div>
            Botón
          </Button>
          <Button type="button" isSuccess>
            <div
              className="spinner-border text-light spinner-border-sm"
              role="status"
            >
              <span className="sr-only">Cargando...</span>
            </div>
            Botón
          </Button>
          <Button type="button" isDanger>
            <div
              className="spinner-border text-light spinner-border-sm"
              role="status"
            >
              <span className="sr-only">Cargando...</span>
            </div>
            Botón
          </Button>
          <Button type="button" isLink>
            <div
              className="spinner-border text-info spinner-border-sm"
              role="status"
            >
              <span className="sr-only">Cargando...</span>
            </div>
            Botón
          </Button>
        </div>

        <br />

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button type="button" isOutlinePrimary>
            <div
              className="spinner-border text-primary spinner-border-sm"
              role="status"
            >
              <span className="sr-only">Cargando...</span>
            </div>
            Botón
          </Button>
          <Button type="button" isOutlineSecondary>
            <div
              className="spinner-border text-secondary spinner-border-sm"
              role="status"
            >
              <span className="sr-only">Cargando...</span>
            </div>
            Botón
          </Button>
          <Button type="button" isOutlineSuccess>
            <div
              className="spinner-border text-success spinner-border-sm"
              role="status"
            >
              <span className="sr-only">Cargando...</span>
            </div>
            Botón
          </Button>
          <Button type="button" isOutlineDanger>
            <div
              className="spinner-border text-danger spinner-border-sm"
              role="status"
            >
              <span className="sr-only">Cargando...</span>
            </div>
            Botón
          </Button>
          <Button type="button" isOutlineLink>
            <div
              className="spinner-border text-info spinner-border-sm"
              role="status"
            >
              <span className="sr-only">Cargando...</span>
            </div>
            Botón
          </Button>
        </div>

        <br />

        <Button type="button" size="xs" aria-label="Editar" isAction>
          <span className="material-symbols-rounded o-icon" aria-hidden="true">
            edit
          </span>
        </Button>

        <br />

        <Button type="button" size="xs" aria-label="Editar" isAction>
          <i className="bx bxs-trash-alt o-icon"></i>
        </Button>

        <br />

        <p>Banner</p>

        <br />

        <Banner
          iconBanner="bx bx-info-circle o-icon"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          buttons={
            <>
              <button className="btn btn-sm btn-primary">Click Me</button>
              <button className="btn btn-sm btn-secondary">Click Me</button>
            </>
          }
        />

        <br />

        <Banner
          iconBanner="face"
          isDark={true}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          buttons={
            <>
              <button className="btn btn-sm btn-primary">Click Me</button>
              <button className="btn btn-sm btn-secondary">Click Me</button>
            </>
          }
        />

        <br />

        <Banner
          iconBanner="bx bx-info-circle o-icon"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ></Banner>

        <br />

        <Banner
          iconBanner="bx bx-info-circle o-icon"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <br />

        <Banner
          iconBanner="face"
          isDark={true}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <br />

        <Banner description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

        <br />

        <Banner
          isDark={true}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </>
  );
}
