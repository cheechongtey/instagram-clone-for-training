import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../css/articleImage.scss";

import { getMediaPath } from "../../utils";

function ArticleImage({ imageOnDblClick, imageRefs, imgObj, doubleClickIcon, propsKey }) {
    const mltSlides = imgObj.map((value, key) => (
        <img
            className="body__image-images"
            src={getMediaPath(value.img_path)}
            alt=""
            draggable={false}
            data-value={key + 1}
        />
    ));

    const renderDotsItem = ({ isActive }) => {
        return <div className={`fAOlie ${isActive && "active"}`}></div>;
    };

    return (
        <div
            className="body__image"
            id="body__image"
            ref={(e) => (imageRefs.current[propsKey] = e)}
            onDoubleClick={(e) => imageOnDblClick(e, propsKey)}
            key={propsKey}>
            <div className="body__image-swippers">
                <AliceCarousel
                    disableButtonsControls
                    items={mltSlides}
                    mouseTracking={imgObj.length > 1 ? true : false}
                    disableDotsControls={imgObj.length > 1 ? false : true}
                    renderDotsItem={renderDotsItem}
                />
                <i className="body__image-icon fa fa-heart" ref={(e) => (doubleClickIcon.current[propsKey] = e)}></i>
            </div>
        </div>
    );
}

export default React.memo(ArticleImage);
