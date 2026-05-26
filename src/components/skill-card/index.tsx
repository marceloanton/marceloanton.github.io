import { skeleton } from '../../utils';

const SkillCard = ({
  loading,
  skills,
}: {
  loading: boolean;
  skills: string[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
        </div>,
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg card-sm bg-base-100 border border-base-300/40">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">
                Habilidades Tecnicas
              </span>
            )}
          </h5>
        </div>
        <div className="p-3">
          <div className="grid grid-cols-1 gap-2">
            {loading
              ? renderSkeleton()
              : skills.map((skill, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 rounded-lg bg-primary/12 border border-primary/30 text-primary-content/90 text-sm leading-snug"
                  >
                    {skill}
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
