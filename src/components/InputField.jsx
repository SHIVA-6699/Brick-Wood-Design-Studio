
const InputField = ({ text, size, register, name }) => {
  return (
    <input
      type="text"
      className={`
                w-full
                h-[50px]
                bg-[#448168]
                px-8
                text-white
                rounded-lg
                focus:outline-none
                text-[18px]
                border-2
            `}
      placeholder={text}
      {...register(name, { required: true })}
    />
  );
};

export default InputField;
