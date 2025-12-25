"use client";

import { Dropdown } from "@/app/ui/DropDown";
import Input from "@/app/ui/Input";
import { useEffect, useState } from "react";
import { fetchAllCities } from "../../../services/location";
import { updateShopLocation } from "../../../services/shop";
import { toast, ToastContainer } from "react-toastify";
import Button from "@/app/ui/Button";
interface LocaitonType {
  id: number;
  city_name: string;
}

const LocationSection = () => {
  const [locations, setLocations] = useState<LocaitonType[]>([]);
  const [selectedLocaiton, setSelectedLocation] = useState<LocaitonType | null>(
    null
  );

  const [customLocation, setCutsomLocation] = useState<string>("");
  const handleSelectLocation = (location: LocaitonType) => {
    setSelectedLocation(location);
  };

  useEffect(() => {
    const getAllCities = async () => {
      const res = await fetchAllCities();
      const data = res.data as LocaitonType[];
      setLocations([
        ...data,
        {
          id: Infinity,
          city_name: "Other",
        },
      ]);
    };
    getAllCities();
  }, []);

  const handleUpdateLocation = async () => {
    try {
      const res = await updateShopLocation(
        selectedLocaiton?.id as number,
        customLocation
      );

      if (res?.data) {
        toast.success("Shop location updated successfully!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server Error! Please try again later");
    }
  };

  return (
    <div className="mt-4 gap-4 space-y-4">
      <div className="space-y-2 flex gap-4">
        <div className="space-y-1">
          <h1 className="text-lg font-medium">მაღაზიის ლოკაცია</h1>

          <Dropdown>
            <Dropdown.Trigger className="py-2 border-2 max-w-[200px] border-light-gray">
              {selectedLocaiton ? selectedLocaiton?.city_name : "აირჩიე ქალაქი"}
            </Dropdown.Trigger>
            <Dropdown.Menu className="!top-11" expandMode="absolute">
              {locations.map((location) => (
                <Dropdown.Item
                  onSelect={() => handleSelectLocation(location)}
                  key={location.id}
                >
                  {location.city_name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {selectedLocaiton?.city_name === "Other" && (
          <div>
            <label
              className="font-medium text-lg mb-1 inline-block"
              htmlFor="otherLocation"
            >
              მიუთითეთ ლოკაცია
            </label>
            <Input
              className="max-w-[200px]"
              placeholder="მაგ. ქუთაისი"
              name="otherLocation"
              value={customLocation}
              onChange={(e) => setCutsomLocation(e.target.value)}
            />
          </div>
        )}
      </div>
      <Button
        onClick={handleUpdateLocation}
        rounded="lg"
        title="განახლება"
        type="button"
        bgcolor="black"
        className="py-2.5 md:max-w-[200px] mb-6 h-fit"
        titleColor="white"
      />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default LocationSection;
