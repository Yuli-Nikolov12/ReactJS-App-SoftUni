import { Link } from "react-router-dom";
import { useContext } from 'react';
import { ThemeModeContext } from '../../contexts/ThemeContext';

export default function ProductItem(product)
{
    const [mode, setMode] = useContext(ThemeModeContext);

    return(
        <div>
            <Link to={`/all-products/${product._id}/details`} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className={`mt-4 text-sm text-gray-${mode=== false? "300" : "900"}`}>{product.name}</h3>
                    <p className={`mt-1 text-lg font-medium text-gray-${mode=== false? "300" : "900"}`}>{product.price}</p>
            </Link>
        </div>
    )
}