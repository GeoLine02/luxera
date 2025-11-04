import Button from "@/app/ui/Button";
import Modal from "@/app/ui/Modal";
import { ClipLoader } from "react-spinners";
import { deleteShopService } from "../../../services/shop";
import { useUser } from "@/app/providers/UserProvider";
import Input from "@/app/ui/Input";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

interface ShopDeleteModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShopDeleteModal = ({ setIsModalOpen }: ShopDeleteModalProps) => {
  const { user } = useUser();
  const [password, setPasswrd] = useState<string>("");
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  console.log(error);
  const handleDeleteModal = async () => {
    setLoading(true);
    try {
      if (!password.length) {
        setError("Password is required");
      }

      if (user?.id) {
        const res = await deleteShopService(user.id, password);
        console.log(res);
        if (res?.error) {
          setError(res.error);
        }
        setIsModalOpen(false);
        setError("");
        router.push("/shop/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswrd(e.target.value);
  };

  const handleCloseDeleteModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal>
      <div className="bg-white p-4 rounded-xl w-full max-w-[600px] space-y-9">
        <h1 className="text-3xl font-bold">Delete Shop</h1>

        <p className="text-lg">
          Are you sure you want to delete your shop? <br /> This action is
          permament.
        </p>

        <div className="space-y-2">
          <label className="text-sm font-medium">Password</label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
          <p className="text-sm font-medium text-red-500">{error}</p>
        </div>

        <div className="flex items-center justify-end gap-4">
          <Button
            title="Delete"
            rounded="md"
            type="button"
            bgColor="red"
            disabled={loading}
            loader={loading && <ClipLoader size={25} color="white" />}
            onClick={handleDeleteModal}
            titleColor="white"
            className="!w-fit py-2 px-4 font-medium disabled:bg-red-500/70 flex items-center"
          />
          <Button
            title="Decline"
            rounded="md"
            type="button"
            bgColor="black"
            titleColor="white"
            className="!w-fit py-2 px-4 font-medium"
            onClick={handleCloseDeleteModal}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ShopDeleteModal;
