using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Details
    {
        public class Query : IRequest<Result<Activity>>
        {
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Query, Result<Activity>>
        {
            private readonly DataContext __Context;
            public Handler(DataContext _Context)
            {
                __Context = _Context;

            }
            public async Task<Result<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                var Activity= await __Context.Activities.FindAsync(request.Id);

                return Result<Activity>.Success(Activity);
                
            }
        }

    }



}