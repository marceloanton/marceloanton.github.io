import { skeleton } from '../../utils';
import { SanitizedSkillGroup } from '../../interfaces/sanitized-config';

const SkillCard = ({
  loading,
  skills,
  skillGroups,
}: {
  loading: boolean;
  skills: string[];
  skillGroups?: SanitizedSkillGroup[];
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
          {loading ? (
            <div className="grid grid-cols-1 gap-2">{renderSkeleton()}</div>
          ) : skillGroups && skillGroups.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {skillGroups.map((group, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-base-300/40 bg-base-200/40 p-3"
                >
                  <h6 className="text-sm font-semibold text-base-content mb-2">
                    {group.title}
                  </h6>
                  <div className="grid grid-cols-1 gap-2">
                    {group.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="px-3 py-2 rounded-lg bg-primary/12 border border-primary/40 text-base-content text-sm leading-snug"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-3 py-2 rounded-lg bg-primary/12 border border-primary/40 text-base-content text-sm leading-snug"
                >
                  {skill}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
