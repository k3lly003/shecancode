import ReusableSection from '../../ReusableSection';

const VisionMission = ({ mission, vision }) => {
  return (
    <ReusableSection flexDirection={"row"} background={"white"}>
      <div className='flex justify-between flex-wrap'>
          {/* Vision Section */}
          <div className="mb-8 w-full md:w-[48%]">
            <h3 className="section-sub-title">
              {vision.title}
            </h3>
            <p className="font-light text-base font lg:text-xl text-justify text-sky-950">
              {vision.description}
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-8 w-full md:w-[48%]">
            <h3 className="section-sub-title">
              {mission.title}
            </h3>
            <p className="font-light text-base font lg:text-xl text-justify text-sky-950">
              {mission.description}
            </p>
          </div>
        </div>
    </ReusableSection>
  );
};

export default VisionMission;
