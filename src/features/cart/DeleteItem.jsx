import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";
import PropTypes from "prop-types";

DeleteItem.propTypes = {
  pizzaId: PropTypes.string.isRequired,
};

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type={"dark"} onClick={() => dispatch(deleteItem(pizzaId))}>
      Remove
    </Button>
  );
}

export default DeleteItem;
