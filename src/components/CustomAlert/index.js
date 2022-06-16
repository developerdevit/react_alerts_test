import React, {useEffect, useState} from "react";
import './styles.scss';
import {Alert} from "reactstrap";
import classNames from "classnames";

const CLASS_NAME = 'CustomAlert';

function CustomAlert({children, local = false, closable = false, color = 'info'}) {
  const className = classNames(CLASS_NAME, {
    [`${CLASS_NAME}--global`]: !local
  });
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if(!closable) {
      setTimeout(() => {
        setIsOpen(false);
      }, 2000)
    }
  }, []);

  const onClose = () => {
    setIsOpen(false);
  }

  return isOpen ? (
    <div className={className}>
      <Alert isOpen={isOpen} color={color} children={children} toggle={closable ? onClose : false} />
    </div>
  ) : null
}

export default CustomAlert;